import React, { useState } from 'react';

const Test06 = ({ basic }) => {

  const [form, setForm] = useState({
    country: '',
    state: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setForm({ country: value, state: '', city: '' });
    } 
    else if (name === 'state') {
      setForm({ ...form, state: value, city: '' });
    } 
    else {
      setForm({ ...form, [name]: value });
    }
  };

  const selectedCountry = basic.find(
    (c) => c.country === form.country
  );

  const selectedState = selectedCountry?.states.find(
    (s) => s.name === form.state
  );

  return (
    <div className="text-center">

      <form className="bg-amber-300 flex flex-col gap-5 items-center p-5">

        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="border-2 rounded p-2"
        >
          <option value="">Select Country</option>
          {basic.map((c) => (
            <option key={c.country} value={c.country}>
              {c.country}
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
          {selectedCountry?.states.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
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
          {selectedState?.cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {form.city && (
          <p className="font-bold">
            {form.city}, {form.state}, {form.country}
          </p>
        )}

      </form>

    </div>
  );
};

export default Test06;