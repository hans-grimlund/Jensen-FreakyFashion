import './Hero.css'

interface Props {
    title?: string;
    content?: string;
}

export const Hero = ({ title, content }:Props) => {
    const imgStyle = {
        backgroundImage: 'url(https://freakyfashion.blob.core.windows.net/site/hero.jpeg)',
    }

    return (
        <div className='hero p-4 mb-4 bg-light d-flex justify-content-between rounded-4'>
            <div className={'col-5 d-flex flex-column align-items-center'}>
                <h1 className=''>{title}</h1>
                <p className={'text-center'}>{content}</p>
            </div>
            <div className={'col-5 d-flex flex-column align-items-center'}>
                <div className={'hero-image h-100 col-12 rounded-1'} style={imgStyle} />
            </div>
        </div>
    )
}