import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

const members = () => {
    return <h1>MEMBERS ONLy</h1>;
};

export default members;
export const getServerSideProps = withPageAuthRequired();
