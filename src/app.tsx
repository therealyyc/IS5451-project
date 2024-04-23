import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from 'antd';
import RouterApp from './router/app-router';
import FallbackRender from "./components/error-handler";


// the entrance of the application, all the context provider should be put in here
function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FallbackRender}
      >
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#2b83cb',
            borderRadius: 4,
          },
          components: {
            Menu: {
              itemBg: 'rgba(74,90,103,1)',
              itemColor: '#ffffff',
              itemHoverColor: '#ffffff',
              itemSelectedBg: 'rgba(110, 123, 133, 0.50)'
            },
            Button: {
              contentFontSize: 12,

            }
          }
        }}>
          <RouterApp />
        </ConfigProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
