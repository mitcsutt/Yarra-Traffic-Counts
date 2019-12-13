Main
=====

Main is used to hold the main container of what is being displayed on the screen. It helps with sizing.
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |

******
Example
=======

    import Main from 'global/components/main';

    const ExampleMain = () => {
        return (
            <Main classes = 'example-main'>
                Example Text
            </Main>
        )
    }
