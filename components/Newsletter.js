import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Newsletter() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div id="newsletter" >
    <form onSubmit={subscribe}>
      <div className="newslettertext">
      Coming Soon!

    </div>
      <div className="newslettertext">
        {message
          ? message
          : `Enter your email to recieve development updates.`}
      </div>
      <label htmlFor="email-input"></label>
      <TextField
        id="email-input"
        name="email"
        placeholder="you@yours.com"
        inputRef={inputEl}
        required
        type="email"
      />
      <Button id="subscribebtn" size="large" color="primary" variant="contained" type="submit">{'Subscribe'}</Button>
    </form>
</div>
  );
}

export default Newsletter;