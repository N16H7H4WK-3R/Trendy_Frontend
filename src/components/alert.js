import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                Change this and that and try again. Duis mollis, est non commodo.
            </p>
        </Alert>
    );
}
export default AlertDismissible;