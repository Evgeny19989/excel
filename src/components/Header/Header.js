
import {ExelComponent} from "@core/ExelComponent";

export class Header extends ExelComponent{
    static className = 'excel__header'
toHTML() {
    return `
          <input class="input" type="text" value="Новая таблица"/>

            <div>
                <div class="button">
                    <li class="material-icons">delete</li>
                </div>
                <div class="button">
                    <li class="material-icons">exit_to_app</li>
                </div>
            </div>
    `
}
}