View
=====

View is used to render div tags to allow consistency if change is required. It can be passed a ref
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |

******
Example
=======

    import View from 'global/components/view';

    const Example = () => {
        return (
            <View classes = 'example-view'>
                Example Text
            </View>
        )
    }
