import React, {useEffect, useState} from 'react';
import './Steps/details.scss'
import './Form/form.scss'

function Details({formik}) {
  return (
    <div className='detail-container'>
    	<label className='form-labels' htmlFor="">Upload a video or photos</label>
    	<div className="frame">
			<div class="center">
				<div class="dropzone">
					<img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" />
					<input type="file" class="upload-input" />
				</div>
				<div class="dropzone">
					<img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" />
					<input type="file" class="upload-input" />
				</div>
				<div class="dropzone">
					<img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" />
					<input type="file" class="upload-input" />
				</div>

				{/* <button type="button" class="btn" name="uploadbutton">Upload file</button> */}
			</div>
		</div>
		
		<label className='form-labels' htmlFor="">Tell us more about the issue</label>
		<textarea 
			className='form-textarea' 
			name="issueDesc" 
			cols="40" 
			rows="5" 
			value={formik.values.issueDescription}
			onChange={formik.handleChange('issueDescription')}
		>
		</textarea>
    </div>
    
  )
}

export default Details