import React, { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { RememberPassword } from '../Constant';

const FormPassword = () => {
    return (
        <Fragment>
            <FormGroup className="mb-0 position-relative">
                <div className="checkbox">
                    <Input id="checkbox1" type="checkbox" />
                    <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                    </div>
            </FormGroup>
        </Fragment>
    );
};
export default FormPassword;