
import {ExelComponent} from "@core/ExelComponent";

export class Formula extends ExelComponent{
    static className = 'excel__formula'
    toHTML() {
        return `
          <div class="info">Fx</div>

            <div class="input" contenteditable spellcheck="false"></div>
        `
    }
}