function App() {
  const courseName = 'application dev';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
      kind: 'basic',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: 'group',
    },
    {
      name: 'Basics of type Narrowing',
      exerciseCount: 7,
      description: 'How to go from unknown to string',
      kind: 'basic',
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      backgroundMaterial:
        'https://type-level-typescript.com/template-literal-types',
      kind: 'background',
    },
  ];

  return (
    <div>
      <h1>Course Parts</h1>
      {courseParts.map((part, index) => (
        <div key={index} style={{ marginBottom: '1em' }}>
          <h2>{part.name}</h2>
          <p>Exercises: {part.exerciseCount}</p>
          {'description' in part && <p>{part.description}</p>}
          {'groupProjectCount' in part && (
            <p>Group Projects: {part.groupProjectCount}</p>
          )}
          {'backgroundMaterial' in part && (
            <p>
              Background:{' '}
              <a href={part.backgroundMaterial}>{part.backgroundMaterial}</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
