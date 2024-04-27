document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dynamic-form');
    const addFieldBtn = document.getElementById('add-field');

    addFieldBtn.addEventListener('click', function() {
      const fieldContainer = document.createElement('div');
      fieldContainer.classList.add('form-field');

      const nameLabel = document.createElement('label');
      nameLabel.textContent = '';
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.placeholder='Name';

      const ageLabel = document.createElement('label');
      ageLabel.textContent = '';
      const ageInput = document.createElement('input');
      ageInput.type = 'number';
      ageInput.name = 'age';
      ageInput.placeholder='Age';

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.classList.add('remove-field');
      removeBtn.textContent = 'Remove';

      removeBtn.addEventListener('click', function() {
        fieldContainer.remove();
      });

      fieldContainer.appendChild(nameLabel);
      fieldContainer.appendChild(nameInput);
      fieldContainer.appendChild(ageLabel);
      fieldContainer.appendChild(ageInput);
      fieldContainer.appendChild(removeBtn);

      form.insertBefore(fieldContainer, addFieldBtn);
      removeBtn.style.display = 'inline-block'; 
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        if (!data[key]) {
          data[key] = value;
        } else {
          if (!Array.isArray(data[key])) {
            data[key] = [data[key]];
          }
          data[key].push(value);
        }
      });
      console.log(data);
    });
  });