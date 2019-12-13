Header
=====

Header is the top part of a area containing the heading and other header like actions
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |
| left       | Boolean  | Overrides default and places children on the left of the heading        |
| value       | String  | Value passed to the heading text       |


******
Example
=======

    import Button from 'global/components/button';
    import Header from 'global/components/header';

    const ExampleLayout = () => {
        return (
            <Header left value='Sample Text'>
				<Button classes="header__button" onClick={null}>Button</Button>
			</Header>
        )
    }
