const getFrontPageHtml = (noteCount) => {
  return `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div class="container">
        <h1>Full stack example</h1>
        <p>number of notes create ${noteCount}</p>
        <a href="/notes">notes</a>
        <img src="kuba.png" width="200" />
      </div>
    </body>
  </html>
  `;
};

app.get('/', (req, res) => {
  const page = getFrontPageHtml(notes.length);
  res.send(page);
});

// POST request practice

app.post('/new_note', (req, res) => {
  notes.push({
    content: req.body.note,
    date: new Date(),
  });

  return res.redirect('/notes');
});
