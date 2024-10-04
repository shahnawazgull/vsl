const evt1 = document.getElementById('addMoreBtn');

evt1?.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionContainer = document.getElementById('repeatable-block');
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    // Create a new section div
    const newSection1 = document.createElement('div');
    newSection1.classList.add('browse-field');
    newSection1.innerHTML = `<label for="formFileLg" class="label-txt">Upload MP3 1:</label><div class="custum-browse custum-browse-v2 d-flex align-items-center"><div class="brws"><input class="br-input" type="file" /><a href="#!" class="btn get-start browse-btn"><img src="assets/images/upload-icn-black.svg" alt="" /> Choose file</a></div><p></p></div>`;
    
    // Create a new section div
    const newSection2 = document.createElement('div');
    newSection2.classList.add('browse-field');
    newSection2.innerHTML = `<label for="exampleInput" class="label-txt">What Second Should This MP3 Play? <small>in minutes</small> </label>`;
    

    // Create a new section div
    const newSection3 = document.createElement('div');
    newSection3.classList.add('time-fld');
    newSection3.innerHTML = `<div class="browse-field"><label for="exampleInput" class="label-txt">Start:</label><input type="text" placeholder="00:00" class="form-control" id="exampleInput" aria-describedby="emailHelp" /></div><div class="browse-field"><label for="exampleInput" class="label-txt">End:</label><input type="text" placeholder="00:00" class="form-control" id="exampleInput" aria-describedby="emailHelp" /></div>`;
    
    
   

    // Append the heading and input to the new section
    newSection.appendChild(newSection1);
    newSection.appendChild(newSection2);
    newSection.appendChild(newSection3);
    sectionContainer.appendChild(newSection);
});
const evt2 = document.getElementById('createLeadBtn')
evt2?.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionContainer = document.getElementById('leadsTable');
    // Create a new section div
    const newSection = document.createElement('tr');
    newSection.innerHTML = `<td>Slide</td><td><textarea type="text" placeholder="Type Your Sentence Here" class="form-control tab-textarea" aria-describedby="textarea"></textarea></td><td style="background: none;"><div class="custum-browse custum-browse-v2 d-flex align-items-center"><div class="brws"><input class="br-input" type="file"><a href="#!" class="btn get-start browse-btn"><img src="assets/images/upload-icn-black.svg" alt=""> Choose file</a></div><p></p></div></td><td><a href="#!"><img src="assets/images/delete-icn.svg" alt="delete"></a></td>`;
    
    // Append the heading and input to the new section
    sectionContainer.appendChild(newSection);
});





