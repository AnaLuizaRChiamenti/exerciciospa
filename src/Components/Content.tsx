import react from 'react';
import BoxStyled from './BoxStyled';
import TitleStyled from './TitleStyled';
import WrapperIconStyled from './WrapperContentTextStyled';

interface ContentProps {
    description: string,
    title: string,
    srcimage: string,
    altImage: string,
    rowDirection?: 'row-reverse'  | 'row';

}

const Content: React.FC<ContentProps> = ({ title, description, srcimage, altImage, rowDirection}) => {
    return (
        <BoxStyled widthSize='100%' heightSize='min-content' rowReverse= {rowDirection} >
            <WrapperIconStyled>
                <TitleStyled fontSize=''> {title} </TitleStyled>
                <p>{description}</p>
            </WrapperIconStyled>
            <figure>
                <img src={srcimage} alt={altImage} />
            </figure>
        </BoxStyled>
    )
}

export default Content;