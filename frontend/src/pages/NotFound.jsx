import pickleImage from '../assets/pickle.png';

export default function NotFound() {


    return (
        <div className='four-o-four'>
            <h1 >404 Page not found!</h1>
            <img src={pickleImage} alt="dang, even the image isn't found!" />
        </div>
    )
}
