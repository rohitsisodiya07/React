import React, { useState } from 'react';

const Test05 = ({ answer }) => {

  const [form, setForm] = useState({
    country: '',
    state: '',
    city: '',
    area: '',
    pincode: '',
    landmark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setForm({
        country: value,
        state: '',
        city: '',
        area: '',
        pincode: '',
        landmark: ''
      });
    }
    else if (name === 'state') {
      setForm({
        ...form,
        state: value,
        city: '',
        area: '',
        pincode: '',
        landmark: ''
      });
    }
    else if (name === 'city') {
      const citydata = answer[form.country].states[form.state][value];
      setForm({
        ...form,
        city: value,
        area: '',
        pincode: citydata.pincode,
        landmark: ''
      });
    }
    else if (name === 'area') {
      setForm({
        ...form,
        area: value,
        landmark: ''
      });
    }
    else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
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
          <option value="">Select Country</option>
          {Object.keys(answer).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          disabled={!form.country}
          className="border-2 rounded p-2"
        >
          <option value="">Select State</option>
          {form.country &&
            Object.keys(answer[form.country].states).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>

        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          disabled={!form.state}
          className="border-2 rounded p-2"
        >
          <option value="">Select City</option>
          {form.country && form.state &&
            Object.keys(answer[form.country].states[form.state]).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

        <select
          name="area"
          value={form.area}
          onChange={handleChange}
          disabled={!form.city}
          className="border-2 rounded p-2"
        >
          <option value="">Select Area</option>
          {form.country && form.state && form.city &&
            answer[form.country].states[form.state][form.city].areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
        </select>

        <select
          name="landmark"
          value={form.landmark}
          onChange={handleChange}
          disabled={!form.area}
          className="border-2 rounded p-2"
        >
          <option value="">Select Landmark</option>
          {form.country && form.state && form.city && form.area &&
            answer[form.country].states[form.state][form.city].landmarks.map((land) => (
              <option key={land} value={land}>
                {land}
              </option>
            ))}
        </select>

        <p className="font-semibold">
          Pincode: {form.city ? form.pincode : "Select city"}
        </p>

        {form.landmark && (
          <p className="font-bold">
            {`${form.landmark}, ${form.area}, ${form.city}, ${form.state}, ${form.country} - ${form.pincode}`}
          </p>
        )}

        <button
          disabled={!form.country || !form.state || !form.city || !form.area || !form.landmark}
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 disabled:bg-gray-400"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Test05;