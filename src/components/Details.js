import React from 'react'
import './Steps/details.scss'
import './Form/form.scss'

function Details() {
  return (
    <div>
        <label className='form-labels' htmlFor="">Upload a video or photos</label>
       <div class="frame">
	<div class="center">
		<div class="title">
			<h1>Drop file to upload</h1>
		</div>

		<div class="dropzone">
			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
			<input type="file" class="upload-input" />
		</div>

		<button type="button" class="btn" name="uploadbutton">Upload file</button>

	</div>
</div>
<label className='form-labels' htmlFor="">Tell us more about the issue</label>
<textarea name="Text1" cols="40" rows="5"></textarea>
    </div>
    
  )
}

export default Details