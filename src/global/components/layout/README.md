Layout
=====

Layout is used to align items on the page
******
Props
=====
| Prop          | Type    | Description                |
| ------------- |-------| -----                    |
| classes       | String  | Custom class name         |
| center       | Boolean  | Used to position the children in the center of the page        |
| top       | Boolean  | Used to position the children at the top of the page       |
| bottom       | Boolean  | Used to position the children at the bottom of the page        |

******
Example
=======

    import Layout from 'global/components/layout';

    const ExampleLayout = () => {
        return (
            <Layout classes = 'example-layout' center>
                Example Text
            </Layout>
        )
    }
