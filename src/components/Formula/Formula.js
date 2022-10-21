import {ExelComponent} from "@core/ExelComponent";

export class Formula extends ExelComponent {
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        });
    }

    static className = 'excel__formula'

    toHTML() {
        return `
          <div class="info">Fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(this.$root)
    }
}
