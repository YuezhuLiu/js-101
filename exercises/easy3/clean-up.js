const cleanUp = sentence => {
  return sentence.replace(/[^a-zA-Z]+/g, ' ');
};
cleanUp("---what's my +*& line?");    // " what s my line "
