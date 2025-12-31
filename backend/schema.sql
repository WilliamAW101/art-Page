--
-- PostgreSQL database dump
--

\restrict 1LFUPC9rkhcvmd1G0UEXXoiK9ydHQ4EHx4cvXZHC4Ner3OYYNGAg6yAoSoV5rIB

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: artworks; Type: TABLE; Schema: public; Owner: artpage_user
--

CREATE TABLE public.artworks (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    image_url character varying(500) NOT NULL,
    creation_date date,
    width integer,
    height integer,
    file_size integer,
    featured boolean DEFAULT false,
    display_order integer DEFAULT 0,
    visible boolean DEFAULT true,
    alt_text text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.artworks OWNER TO artpage_user;

--
-- Name: artworks_id_seq; Type: SEQUENCE; Schema: public; Owner: artpage_user
--

CREATE SEQUENCE public.artworks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.artworks_id_seq OWNER TO artpage_user;

--
-- Name: artworks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: artpage_user
--

ALTER SEQUENCE public.artworks_id_seq OWNED BY public.artworks.id;


--
-- Name: artworks id; Type: DEFAULT; Schema: public; Owner: artpage_user
--

ALTER TABLE ONLY public.artworks ALTER COLUMN id SET DEFAULT nextval('public.artworks_id_seq'::regclass);


--
-- Name: artworks artworks_pkey; Type: CONSTRAINT; Schema: public; Owner: artpage_user
--

ALTER TABLE ONLY public.artworks
    ADD CONSTRAINT artworks_pkey PRIMARY KEY (id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: artpage_user
--

ALTER DEFAULT PRIVILEGES FOR ROLE artpage_user IN SCHEMA public GRANT ALL ON SEQUENCES TO artpage_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: artpage_user
--

ALTER DEFAULT PRIVILEGES FOR ROLE artpage_user IN SCHEMA public GRANT ALL ON TABLES TO artpage_user;


--
-- PostgreSQL database dump complete
--

\unrestrict 1LFUPC9rkhcvmd1G0UEXXoiK9ydHQ4EHx4cvXZHC4Ner3OYYNGAg6yAoSoV5rIB

