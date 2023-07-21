import { ChoseImage } from '../../components/Icons/Icons';



const AddPhoto = ({ photoData, handleChangePhoto }) => {
  

  return (
    <div>

      {
        photoData.photo ? (
          <div>
            <div
              className="photo-preview shadow-lg"
              style={{ backgroundImage: `url(${URL.createObjectURL(photoData.photo)})` }}
            />
            <button className="photo-clear-btn" onClick={() => handleChangePhoto({ photo: '' })}>
              Clear Photo
            </button>
          </div>
        ) : (
          <label htmlFor="photo-input" className="photo-selection shadow-lg">
            <ChoseImage className="plus-icon" />
            <input
              type="file"
              id="photo-input"
              name="photo"
              accept="image/*"
              onChange={handleChangePhoto}
            />
          </label>
        )
      }
    </div>
  );
}

export default AddPhoto;