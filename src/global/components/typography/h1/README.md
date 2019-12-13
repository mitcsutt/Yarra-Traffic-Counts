H1
=====

H1 is a controlled h1 component. Admittedly it may be overkill, but better safe than sorry
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |
| value       | String  | Value passed to the element       |


******
Example
=======

    import H1 from 'global/components/h1';

    const ExampleH1 = () => {
        return (
            <H1 classes="example__h1" value='Example'/>
        )
    }
