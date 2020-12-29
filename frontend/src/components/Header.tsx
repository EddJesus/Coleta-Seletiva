import React from 'react';

//interface das props do header
interface HeaderProps {
    title: string;
    subtitle?: string; //usando ? para declarar que essa propriedade não é obrigatória.
}

//Colocando o componente dentro de uma const, tipando essa const e passando uma interface que diz o tipo de parametro que PODERÁ/DEVERÁ ser passado para o componente
//... logo depois chamando uma arrow function passando as props
const Header: React.FC<HeaderProps> = (props) => {
    return(
        <header>{ props.title }</header>
    );
}

export default Header;