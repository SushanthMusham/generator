const path = require('path');
const { render } = require('@asyncapi/generator-react-sdk');

const { ConnectorFields } = require(path.resolve(__dirname, '..', '..', 'components', 'ConnectorFields.js'));

describe('ConnectorFields component (Quarkus WebSocket)', () => {
  test('no query params (undefined) - snapshot', () => {
    const result = render(<ConnectorFields clientName="NotificationsClient" queryParamsArray={undefined} />);
    expect(result.trim()).toMatchSnapshot();
  });

  test('no query params (empty array) - snapshot', () => {
    const result = render(<ConnectorFields clientName="NotificationsClient" queryParamsArray={[]} />);
    expect(result.trim()).toMatchSnapshot();
  });

  test('with query params - snapshot', () => {
    const result = render(<ConnectorFields clientName="NotificationsClient" queryParamsArray={['userId']} />);
    expect(result.trim()).toMatchSnapshot();
  });

  test('robustness: empty clientName - snapshot', () => {
    const result = render(<ConnectorFields clientName="" queryParamsArray={['p']} />);
    expect(result.trim()).toMatchSnapshot();
  });
});
