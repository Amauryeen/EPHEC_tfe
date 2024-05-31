/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA({});
