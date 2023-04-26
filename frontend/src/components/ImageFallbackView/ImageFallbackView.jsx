import errorImage from './error.jpg';


function ImageFallbackView({ message }) {

return (

<div className="Fallbox" role="alert">
<img src={errorImage} width="200" height="200" alt="sadcat" />
<p className="Falltitle">{ message }</p>
</div>

)
}


export default ImageFallbackView

