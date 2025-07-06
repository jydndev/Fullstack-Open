const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!comment || isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }

  return comment;
};
