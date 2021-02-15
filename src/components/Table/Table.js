
import {ExelComponent} from "@core/ExelComponent";

export class Table extends ExelComponent{
    static className = 'excel__table'
    toHTML() {
        return`
        <div class="row">

                <div class="row-info">

                </div>
                <div class="row-data">
                    <div class="column">A</div>
                    <div class="column">B</div>
                    <div class="column">C</div>
                </div>
            </div>

            <div class="row">

                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div contenteditable="" class="cell selected">fgdfg</div>
                    <div contenteditable class="cell">dfgfd</div>
                    <div contenteditable class="cell">dfgdgdfd</div>
                </div>
            </div>

            <div class="row">

                <div class="row-info">
                    2
                </div>
                <div class="row-data">
                    <div contenteditable class="cell ">fgdfg</div>
                    <div contenteditable class="cell">dfgfd</div>
                    <div contenteditable class="cell">dfgdgdfd</div>
                </div>
            </div>
        `
    }
}