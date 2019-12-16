Card
=====

Card is used to create simple cards used to display information on
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
    import Card from 'global/components/card';

    const ExampleMain = () => {
        return (
            <Main classes = 'example-main'>
                <Card classed = 'example-card'>
                    Example Text
                </Card>
            </Main>
        )
    }
