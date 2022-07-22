import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <>
            <h1>Phạm Thị Thanh Kim Huệ</h1>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRouters.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
