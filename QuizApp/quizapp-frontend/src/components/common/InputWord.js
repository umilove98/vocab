import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const InputWord = ({ words, onChangeField }) => {
  const classes = useStyles();
  const [inputs, setInputs] = useState([{ word: '', definition: '' }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputs];
    values[index][event.target.name] = event.target.value;
    onChangeField({ key: 'inputs', value: values });
    setInputs(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddFields = () => {
    setInputs([...inputs, { word: '', definition: '' }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  useEffect(() => {
    setInputs(words);
  });
  return (
    <Container>
      <form className={classes.root} onSubmit={handleSubmit} inputs={inputs}>
        {inputs.map((inputs, index) => (
          <div key={index}>
            <TextField
              name="word"
              label="word"
              variant="filled"
              value={inputs.word}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="definition"
              label="definition"
              variant="filled"
              value={inputs.definition}
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
