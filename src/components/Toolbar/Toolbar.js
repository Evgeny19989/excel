
import {ExelComponent} from "@core/ExelComponent";

export class Toolbar extends ExelComponent{
    static className = 'excel__toolbar'
    toHTML() {
        return `
             <div class="button">
                <li class="material-icons">format_align_left</li>
            </div>

            <div class="button">
                <li class="material-icons">format_align_center</li>
            </div>

            <div class="button">
                <li class="material-icons">format_align_right</li>
            </div>

            <div class="button">
                <li class="material-icons">format_bold</li>
            </div>

            <div class="button">
                <li class="material-icons">format_italic</li>
            </div>

            <div class="button">
                <li class="material-icons">format_underline</li>
            </div>
        `
    }
}