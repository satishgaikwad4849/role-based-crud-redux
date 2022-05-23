import { Button } from "react-bootstrap";
import { removeItem } from '../actions/item.actions';
import { useDispatch } from 'react-redux';

export const AddItem = (props) => {
  const dispatch = useDispatch();

  return(
    <> 
      {
        props.item.name != "" ?
        <tr>
          <td>{props.item.id}</td>
          <td>{props.item.name}</td>
          <td>{props.item.quantity}</td>
          <td>
            <Button variant="danger"  onClick={() => { dispatch(removeItem(props.item)) }}>x</Button></td>
        </tr>
        :null
      }     
    </>
  );
}
