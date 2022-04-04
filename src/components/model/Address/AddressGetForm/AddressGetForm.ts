import axios, { AxiosResponse, AxiosPromise } from 'axios';
import IAddressInfo from '../AddressInfo';

interface IAddressGetForm {
    zipcode: string;
}

export class AddressGetForm implements IAddressGetForm {
    zipcode: string;

    constructor() {
        this.zipcode = '';
    }
}

// export function getAddress(params: AddressGetForm): Promise<IAddressInfo> {
//     console.log(`GET: AddressGet zipcode:${params.zipcode}`);
//     let uri = 'https://zipcloud.ibsnet.co.jp/api/search';

//     // return new Promise(async () => {
//     //     axios.get<IAddressInfo>(uri, {
//     //         params: params
//     //     })
//     //         .then((data) => {

//     //         })
//     //         .catch((err) => {
//     //             reject(err);
//     //         });
//     // });

//     // const res = (async () => {
//     //     const apiPromise =
//     //         axios.get<IAddressInfo>(uri, {
//     //             params: params
//     //         });
//     //     return await apiPromise;
//     // })();

//     // return res;

//     // axios.get<IAddressInfo>(uri, {
//     //     params: params
//     // }).then((res: AxiosResponse<IAddressInfo>) => {
//     //     if (res.status !== 200) {

//     //     }
//     //     return res.data;
//     // }).catch(() => {
//     //     console.log('GET: AddressGET error.');
//     //     return null;
//     // });
// }