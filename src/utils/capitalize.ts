export function capitalize(value: string | undefined ){
    if(value === undefined){
        return "";
    }
    return `${value.charAt(0).toUpperCase() + value.slice(1)}`;
}