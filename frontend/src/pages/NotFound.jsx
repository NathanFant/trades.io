import pickleImage from '../assets/pickle.png';

export default function NotFound() {


    return (
        <>
            <div>404 Page not found!</div>
            <img src={pickleImage} alt="dang, even the image isn't found!" />
        </>
    )
}
