Button
=====

A simple styled button
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |
| onClick       | func  | Function to be called on Click        |
| value       | String  | Value passed to the button       |
| disabled       | Boolean  | Disabled the button        |
| type       | string  | Type passed to the button        |

******
Example
=======

    import Button from 'global/components/button';

    const ExampleButtont = () => {
        return (
            <Button classes="example__button" onClick={null} type='submit' disabled>
                Button
            </Button>
        )
    }
