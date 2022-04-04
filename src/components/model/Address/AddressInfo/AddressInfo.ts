import HttpStatusCode from '../../HttpStatusCode';
import AddressResults from '../AddressResults/AddressResults';

interface IAddressInfo {
    status: HttpStatusCode;
    message: string;
    results: AddressResults[];
}

export default IAddressInfo;