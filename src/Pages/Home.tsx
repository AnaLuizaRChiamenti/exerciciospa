import React from 'react';
import Banner from '../Components/BannerStyled';
import Icons from '../Components/Icons';
import { BsAlarmFill, BsFillBasketFill, BsFillBellFill } from "react-icons/bs";
import BoxStyled from '../Components/BoxStyled';
import TitleStyled from '../Components/TitleStyled';
import Content from '../Components/Content';

const Home: React.FC = () => {

    return (
        <React.Fragment>
            <Banner height='60vh'>
                <TitleStyled fontSize='3rem'>Minha primeira página com React</TitleStyled>
            </Banner>

            <BoxStyled>
                <Icons
                    icon={<BsAlarmFill />}
                    titulo='Somente para desktop'
                    descricao='Vamos aprender, como utilizar um framework.' />

                <Icons
                    icon={<BsFillBasketFill />}
                    titulo='Criado com componentes'
                    descricao='Utilizamos o Styled Components.' />

                <Icons
                    icon={< BsFillBellFill />}
                    titulo='Facíl aproveitamento'
                    descricao='Estamos no caminho.' />
            </BoxStyled>
            {/* Chamar os componentes das sections de imagem e texto invertido */}

            <Content title='Lorem Ipsum'
                description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                srcimage='./assets/images/celular.png'
                altImage='Imagem-celular'
                rowDirection='row'></Content>
            <Content title='Lorem Ipsum'
                description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                srcimage='./assets/images/codigo.png'
                altImage='Imagem-codigo'
                rowDirection='row-reverse'></Content>
            <Content title='Lorem Ipsum'
                description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                srcimage='./assets/images/crianca.png'
                altImage='Imagem-crianca'
                rowDirection='row'></Content>

            <Banner height='40vh'>
                <TitleStyled fontSize='3rem'>Contato</TitleStyled>
            </Banner>
        </React.Fragment >
    );
};

export default Home;