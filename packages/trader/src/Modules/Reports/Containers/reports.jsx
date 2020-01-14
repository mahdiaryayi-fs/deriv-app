import PropTypes         from 'prop-types';
import React             from 'react';
import { withRouter }    from 'react-router-dom';
import { localize }      from '@deriv/translations';
import {
    DesktopWrapper,
    MobileWrapper }      from '@deriv/components';
import { FadeWrapper }   from 'App/Components/Animations';
import VerticalTab       from 'App/Components/Elements/VerticalTabs/vertical-tab.jsx';
import AppRoutes         from 'Constants/routes';
import { connect }       from 'Stores/connect';
import WalletInformation from './wallet-information.jsx';
import MobileDialog      from 'Modules/Trading/Components/Elements/mobile-dialog.jsx';
import 'Sass/app/modules/reports.scss';

class Reports extends React.Component {

    state = {
        open: true,
    };

    setWrapperRef = (node) => {
        this.wrapper_ref = node;
    };

    handleClickOutside = (event) => {
        if (this.wrapper_ref && !this.wrapper_ref.contains(event.target)) {
            this.props.history.push(AppRoutes.trade);
        }
    };

    componentDidMount() {
        this.props.enableRouteMode();
        document.addEventListener('mousedown', this.handleClickOutside);
        this.props.toggleReports(true);
    }

    componentWillUnmount() {
        this.props.toggleReports(false);
        this.props.disableRouteMode();
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleCloseDialog = () => {
        debugger
        this.setState({
            open: false,
        })
    }

    getCurrentRouteInfo = (path) => {
        let current_route = this.props.routes.filter(item => item.path === path);
        return current_route.length ? current_route[0] : null
    }

    render () {
        const menu_options = () => {
            const options = [];

            this.props.routes.forEach(route => {
                options.push({
                    default: route.default,
                    icon   : route.icon_component,
                    label  : route.title,
                    value  : route.component,
                    path   : route.path,
                });
            });

            return options;
        };

        const action_bar_items = [
            {
                onClick: () => {
                    this.props.history.push(AppRoutes.trade);
                    this.props.toggleReports(false);
                },
                icon : 'IcCross',
                title: localize('Close'),
            },
            {
                component: () => <WalletInformation has_description has_loginid />,
                title    : '',
            },
        ];
        const CurrentReportComponent = this.getCurrentRouteInfo(this.props.location.pathname).component
        return (
            <React.Fragment>
                <DesktopWrapper>
                    <FadeWrapper
                        is_visible={this.props.is_visible}
                        className='reports-page-wrapper'
                        keyname='reports-page-wrapper'
                        >
                        <div className='reports' ref={this.setWrapperRef}>
                            <VerticalTab
                                header_title={localize('Reports')}
                                action_bar={action_bar_items}
                                action_bar_classname='reports__inset_header'
                                alignment='center'
                                id='report'
                                classNameHeader='reports__tab-header'
                                current_path={this.props.location.pathname}
                                is_routed={true}
                                is_full_width={true}
                                list={menu_options()}
                            />
                        </div>
                    </FadeWrapper>
                </DesktopWrapper>
                <MobileWrapper>
                    <MobileDialog
                        visible={this.state.open}
                        title={this.getCurrentRouteInfo(this.props.location.pathname).title}
                        onClose={this.handleCloseDialog}
                    >
                        <CurrentReportComponent />
                    </MobileDialog>
                </MobileWrapper>
            </React.Fragment>
        );
    }
}

Reports.propTypes = {
    disableRouteMode: PropTypes.func,
    enableRouteMode : PropTypes.func,
    history         : PropTypes.object,
    is_visible      : PropTypes.bool,
    location        : PropTypes.object,
    routes          : PropTypes.arrayOf(PropTypes.object),
    toggleReports   : PropTypes.func,
};

export default connect(
    ({ ui }) => ({
        disableRouteMode: ui.disableRouteModal,
        enableRouteMode : ui.setRouteModal,
        is_visible      : ui.is_reports_visible,
        toggleReports   : ui.toggleReports,
    })
)(withRouter(Reports));
