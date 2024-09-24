import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Unlock Your Creativity with Our Open-Source Effects Library
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Discover a vast collection of stunning visual effects to elevate your projects. Our open-source
                                library provides easy-to-use components that you can seamlessly integrate into your applications.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                to={"/components"}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View Components
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Powerful Effects, Effortless Integration
                            </h2>
                            <Link
                                to={"#"}
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Explore Components
                            </Link>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Open-Source</div>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                Our effects library is completely open-source, allowing you to customize and extend the components to
                                fit your unique needs. Contribute to the project and help us grow the library.
                            </p>
                            <Link
                                to={"#"}
                                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}