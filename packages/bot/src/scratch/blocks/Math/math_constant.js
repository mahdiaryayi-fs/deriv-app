import { localize } from 'deriv-translations/lib/i18n';

Blockly.Blocks.math_constant = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: '%1',
            args0   : [
                {
                    type   : 'field_dropdown',
                    name   : 'CONSTANT',
                    options: [
                        ['\u03C0', 'PI'],
                        ['\u2107', 'E'],
                        ['\u03d5', 'GOLDEN_RATIO'],
                        ['sqrt(2)', 'SQRT2'],
                        ['sqrt(\u00bd)', 'SQRT1_2'],
                        ['\u221e', 'INFINITY'],
                    ],
                },
            ],
            output         : 'Number',
            outputShape    : Blockly.OUTPUT_SHAPE_ROUND,
            colour         : Blockly.Colours.Base.colour,
            colourSecondary: Blockly.Colours.Base.colourSecondary,
            colourTertiary : Blockly.Colours.Base.colourTertiary,
            tooltip        : localize('This block gives you the selected constant values.'),
            category       : Blockly.Categories.Mathematical,
        };
    },
    meta(){
        return {
            'display_name': localize('Mathematical constants'),
            'description' : localize('This block gives you the selected constant values.'),
        };
    },
};

Blockly.JavaScript.math_constant = block => {
    const constant = block.getFieldValue('CONSTANT');

    let code,
        order;

    if (constant === 'PI') {
        code = 'Math.PI';
        order = Blockly.JavaScript.ORDER_MEMBER;
    } else if (constant === 'E') {
        code = 'Math.E';
        order = Blockly.JavaScript.ORDER_MEMBER;
    } else if (constant === 'GOLDEN_RATIO') {
        code = '(1 + Math.sqrt(5)) / 2';
        order = Blockly.JavaScript.ORDER_DIVISION;
    } else if (constant === 'SQRT2') {
        code = 'Math.SQRT2';
        order = Blockly.JavaScript.ORDER_MEMBER;
    } else if (constant === 'SQRT1_2') {
        code = 'Math.SQRT1_2';
        order = Blockly.JavaScript.ORDER_MEMBER;
    } else if (constant === 'INFINITY') {
        code = 'Infinity';
        order = Blockly.JavaScript.ORDER_ATOMIC;
    }

    return [code, order];
};
