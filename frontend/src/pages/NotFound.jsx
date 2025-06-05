import pickleImage from '../assets/pickle.png';
import pickleWav from '../assets/sound/pickle.wav'

export default function NotFound() {

    function play() {
        new Audio(pickleWav).play()
    }


    return (
        <div className='four-o-four'>
            <h1>404 Page not found!</h1>
            <img
            title='🥒 click me 🥒'
            src={pickleImage}
            alt="dang, even the image isn't found!"
            onClick={play}
            />
        </div>
    )
}
