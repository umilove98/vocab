import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const InputWord = () => {
  const classes = useStyles();
  const [words, setWords] = useState([{ word: '', definition: '' }]);

  const handleChangeInput = (index, event) => {
    const values = [...words];
    values[index][event.target.name] = event.target.value;
    setWords(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddFields = () => {
    setWords([...words, { word: '', definition: '' }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...words];
    values.splice(index, 1);
    setWords(values);
  };
  return (
    <Container>
      <form className={classes.root} onSubmit={handleSubmit} words={words}>
        {words.map((words, index) => (
          <div key={index}>
            <TextField
              name="word"
              label="word"
              variant="filled"
              value={words.word}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="definition"
              label="definition"
              variant="filled"
              value={words.definition}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => handleAddFields()}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </form>
    </Container>
  );
};

export default InputWord;
