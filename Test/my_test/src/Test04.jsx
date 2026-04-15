import React, { useState } from 'react';

const Test04 = ({ location }) => {

  const [form, setForm] = useState({
    country: '',
    state: '',
    city: '',
    areas: '',
    pincode: '',
    landmarks: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setForm({
        country: value,
        state: '',
        city: '',
        areas: '',
        pincode: '',
        landmarks: []
      });
    }

    else if (name === 'state') {
      setForm({
        ...form,
        state: value,
        city: '',
        areas: '',
        pincode: '',
        landmarks: []
      });
    }

    else if (name === 'city') {

      const cityData =
        location[form.country].states[form.state][value];

      setForm({
        ...form,
        city: value,
        areas: '',
        pincode: cityData.pincode,
        landmarks: cityData.landmarks
      });
    }

    else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", form);
  };

  return (
    <div className="text-center">

      <form
        onSubmit={handleSubmit}
        className="bg-amber-300 flex flex-col gap-5 items-center p-5"
      >

        
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="border-2 rounded p-2"
        >
          <option value="">Select a Country</option>
          {Object.keys(location).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>



        <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border-2 rounded p-2"
            disabled={!form.country}
        >
            <option value="">Select a State</option>
                {form.country &&
                    Object.keys(location[form.country].states).map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}

        </select>


        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          className="border-2 rounded p-2"
          disabled={!form.state}
        >
          <option value="">Select a City</option>
          {form.country && form.state &&
            Object.keys(location[form.country].states[form.state]).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

      
        <select
          name="areas"
          value={form.areas}
          onChange={handleChange}
          className="border-2 rounded p-2"
          disabled={!form.city}
        >
          <option value="">Select an Area</option>
          {form.country && form.state && form.city &&
            location[form.country].states[form.state][form.city].areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
        </select>

        <p className="font-semibold">
          Pincode: {form.pincode || "Select city"}
        </p>

        
        <div>
          <p className="font-semibold">Landmarks:</p>
          <ol className="list-decimal">
            {form.landmarks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          Submit
        </button>

      </form>

    </div>
  );
};

export default Test04;