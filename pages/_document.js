import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href={`${'https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap'}`}
					rel='stylesheet'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href={
						'https://fonts.googleapis.com/css2?family=Cutive&family=Roboto:wght@400;500;700;900&display=swap'
					}
					rel='stylesheet'
				/>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
