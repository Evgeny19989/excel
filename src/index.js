import './module'
import './scss/index.scss'
import {Exel} from "@/components/Exel/Exel";
import {Toolbar} from "@/components/Toolbar/Toolbar";
import {Table} from "@/components/Table/Table";
import {Header} from "@/components/Header/Header";
import {Formula} from "@/components/Formula/Formula";

const exel = new Exel('#app', {
components: [Header, Toolbar, Formula, Table]
})
exel.render()
