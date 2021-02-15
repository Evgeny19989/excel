export class DomListener{
constructor($root) {
    if(!$root){
        throw new Error('No $rot provider for DomListener')
    }
    this.$root = $root
}
}