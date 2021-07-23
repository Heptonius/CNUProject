import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../api';

import { RecipeDetailHeader } from '../components/PageHeaders';
import { RecipeDetail } from '../components/RecipeDetail';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const hasApiFetchedData = useRef(false);
  const [{ data, error, loading }, setRecipeDetail] = useState({
    data: {},
    error: '',
    loading: true,
  });

  useEffect(() => {
    if (!hasApiFetchedData.current) {
      api
        .get(`/recipes/${slug}`)
        .then(({ data }) => {
          setRecipeDetail({ data, error: '', loading: false });
        })
        .catch(() => {
          setRecipeDetail({ data: {}, error: 'Hups, něco se pokazilo ...', loading: false });
        });
      hasApiFetchedData.current = true;
    }
  }, [slug]);

  if (loading) {
    return 'Loading ...';
  }
  if (!!error) {
    return error;
  }
  return (
    <>
      <RecipeDetailHeader title={data.title} slug={slug} data={data} />
      <RecipeDetail data={data} />
    </>
  );
}
